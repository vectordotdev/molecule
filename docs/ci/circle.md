It's possible to have molecule build packages on circle and deploy to the location of your choice. Here's an example of building for OSX and uploading the package to your S3 bucket:

### Circle.yml

```
machine:
  node:
    version: 6.9.1
  environment:
    PATH: "${PATH}:${HOME}/${CIRCLE_PROJECT_REPONAME}/node_modules/.bin"

dependencies:
  override:
    - yarn
  cache_directories:
    - ~/.cache/yarn

test:
  override:
    - yarn test

# Deploy electron builds to S3
deployment:
  prod:
    branch: master
    commands:
      - yarn package
      - aws s3 sync packages s3://your-bucket-name --delete
```

Follow the steps shown here https://circleci.com/docs/1.0/continuous-deployment-with-amazon-s3/ to set up your bucket and IAM settings.