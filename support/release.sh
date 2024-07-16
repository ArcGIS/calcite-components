#!/usr/bin/env bash
set -e

# This script is used to version and publish releases and pre-releases.
#
# @arg1 The deployment step to run, must be either "version" or "publish".
# @arg2 [optional] The pre-release tag, e.g., "next", "hotfix", or "rc". 
#                  Omit this optional argument for a "latest" release

help() {
    [ -n "$1" ] && printf "%s\n" "$@"
    echo "Usage: ./release.sh (version | publish) [<pre-release-tag>]"
    exit 1
}

correct_branch_checked_out() {
    [ "$(git rev-parse --abbrev-ref HEAD)" = "$branch" ]
}

in_sync_with_origin() {
    [ "$(git rev-parse "$branch")" = "$(git rev-parse "origin/$branch")" ]
}

working_tree_clean() {
    [ -z "$(git status --porcelain=v1)" ]
}

sanity_checks() {
    if ! correct_branch_checked_out; then
        help "The '$branch' branch must be checked out before deploying $dist_tag"
    elif ! in_sync_with_origin; then
        help "The repository must be in sync with 'origin/$branch'"
    elif ! working_tree_clean; then
        help "The working tree must be clean before running this script." \
            "Use 'git stash push' to save your changes for later."
    fi
}

version() {
    sanity_checks

    if [ -z "$dist_tag" ] || [ "$dist_tag" = "latest" ]; then
        lerna version --no-push --no-git-tag-version --yes \
            --conventional-commits \
            --create-release github
    else
        lerna version --no-push --no-git-tag-version --yes \
            --conventional-prerelease \
            --preid "$dist_tag"
    fi

    # default to latest if no dist tag was provided in the second argument
    npm run util:sync-linked-package-versions -- "${dist_tag:-latest}"
}

publish() {
    # only add the dist-tag flag if the second argument was provided
    lerna publish from-package --yes ${dist_tag:+--dist-tag $dist_tag}
}

main() {
    cmd="$1"
    dist_tag="$2"

    if [ -z "$dist_tag" ] || [ "$dist_tag" = "latest" ]; then
        branch="main"
    elif [ "$dist_tag" = "next" ]; then
        branch="dev"
    elif [ "$dist_tag" = "rc" ]; then
        branch="rc"
    else
        help "invalid dist tag: '$dist_tag'"
    fi

    if [ -z "$cmd" ]; then
        help "missing argument(s). Specify the command: 'version' or 'publish'"
    elif [ "$cmd" = "version" ]; then
        version
    elif [ "$cmd" = "publish" ]; then
        publish
    else
        help "invalid command: '$cmd'"
    fi
}

main "$@"
