// File: lib/cdk-test-stack.ts

import * as cdk from 'aws-cdk-lib';
import * as ecr_assets from 'aws-cdk-lib/aws-ecr-assets';
import { Construct } from 'constructs';

process.env.CDK_DOCKER = 'finch'
export class CdkTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Build and push the Docker image to a new ECR repository
    const dockerImageAsset = new ecr_assets.DockerImageAsset(this, 'MyDockerImage', {
      directory: '.', // Use the Dockerfile in the current directory
      buildArgs: {
        Version: "" ?? 'default_value', // Pass the Version environment variable as a build-arg
      },
    });

    // Get the ECR repository created by the DockerImageAsset
    const repository = dockerImageAsset.repository;

    // Additional code (if any)...
  }
}

const app = new cdk.App();
new CdkTestStack(app, 'CdkTestStack');
app.synth();
