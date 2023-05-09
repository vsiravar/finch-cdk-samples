"use strict";
// File: lib/cdk-test-stack.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkTestStack = void 0;
const cdk = require("aws-cdk-lib");
const ecr_assets = require("aws-cdk-lib/aws-ecr-assets");
class CdkTestStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Build and push the Docker image to a new ECR repository
        const dockerImageAsset = new ecr_assets.DockerImageAsset(this, 'MyDockerImage', {
            directory: '.',
            buildArgs: {
                Version: process.env.Version ?? 'default_value', // Pass the Version environment variable as a build-arg
            },
        });
        // Get the ECR repository created by the DockerImageAsset
        const repository = dockerImageAsset.repository;
        // Additional code (if any)...
    }
}
exports.CdkTestStack = CdkTestStack;
const app = new cdk.App();
new CdkTestStack(app, 'CdkTestStack');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRlc3Qtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstdGVzdC1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOEJBQThCOzs7QUFFOUIsbUNBQW1DO0FBQ25DLHlEQUF5RDtBQUd6RCxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsS0FBSztJQUN6QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDBEQUEwRDtRQUMxRCxNQUFNLGdCQUFnQixHQUFHLElBQUksVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDOUUsU0FBUyxFQUFFLEdBQUc7WUFDZCxTQUFTLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLGVBQWUsRUFBRSx1REFBdUQ7YUFDekc7U0FDRixDQUFDLENBQUM7UUFFSCx5REFBeUQ7UUFDekQsTUFBTSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1FBRS9DLDhCQUE4QjtJQUNoQyxDQUFDO0NBQ0Y7QUFqQkQsb0NBaUJDO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSxZQUFZLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZpbGU6IGxpYi9jZGstdGVzdC1zdGFjay50c1xuXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgZWNyX2Fzc2V0cyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZWNyLWFzc2V0cyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcblxuZXhwb3J0IGNsYXNzIENka1Rlc3RTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIEJ1aWxkIGFuZCBwdXNoIHRoZSBEb2NrZXIgaW1hZ2UgdG8gYSBuZXcgRUNSIHJlcG9zaXRvcnlcbiAgICBjb25zdCBkb2NrZXJJbWFnZUFzc2V0ID0gbmV3IGVjcl9hc3NldHMuRG9ja2VySW1hZ2VBc3NldCh0aGlzLCAnTXlEb2NrZXJJbWFnZScsIHtcbiAgICAgIGRpcmVjdG9yeTogJy4nLCAvLyBVc2UgdGhlIERvY2tlcmZpbGUgaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5XG4gICAgICBidWlsZEFyZ3M6IHtcbiAgICAgICAgVmVyc2lvbjogcHJvY2Vzcy5lbnYuVmVyc2lvbiA/PyAnZGVmYXVsdF92YWx1ZScsIC8vIFBhc3MgdGhlIFZlcnNpb24gZW52aXJvbm1lbnQgdmFyaWFibGUgYXMgYSBidWlsZC1hcmdcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBHZXQgdGhlIEVDUiByZXBvc2l0b3J5IGNyZWF0ZWQgYnkgdGhlIERvY2tlckltYWdlQXNzZXRcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gZG9ja2VySW1hZ2VBc3NldC5yZXBvc2l0b3J5O1xuXG4gICAgLy8gQWRkaXRpb25hbCBjb2RlIChpZiBhbnkpLi4uXG4gIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbm5ldyBDZGtUZXN0U3RhY2soYXBwLCAnQ2RrVGVzdFN0YWNrJyk7XG5hcHAuc3ludGgoKTtcbiJdfQ==