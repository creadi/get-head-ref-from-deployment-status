# get-head-ref-from-deployment-status

This action returns head ref associated with PR where deployment happened when workflow is triggerd by `deployment_status` event.

## Outputs

## `head_ref`

Head ref associated with PR where deployment happened.

## Example usage

```yaml
    steps:
      - uses: uses: rodilo/get-head-ref-from-deployment-status@v1.2
        id: getHeadRef
      - run: echo $HEAD_REF
        if: success() && steps.getHeadRef.outputs.number
        env:
          HEAD_REF: ${{ steps.getHeadRef.outputs.head_ref }}
```
