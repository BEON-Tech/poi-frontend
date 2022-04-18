#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
LC_ALL=C

local_branch="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex="^(feature|bugfix|improvement|library|prerelease|release|hotfix|tech|spike)\/[a-z0-9._-]+$"

message="There is something wrong with your branch name. Branch names in this project must adhere to this contract:"
message2="Your commit will be rejected. You should rename your branch to a valid name and try again."
valid_example='A valid example is `tech/added-github-actions-integration`'

if [[ ! $local_branch =~ $valid_branch_regex ]]
then
    echo "$message"
    echo "$valid_branch_regex"
    echo "$message2"
    echo ""
    echo "$valid_example"
    echo ""
    exit 1
fi

exit 0 