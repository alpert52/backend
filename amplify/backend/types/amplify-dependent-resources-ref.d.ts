export type AmplifyDependentResourcesAttributes = {
  "api": {
    "photoop": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "photoopaf2c8847af2c8847": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "MediaBuyersGroupRole": "string",
      "MediaCreatorsGroupRole": "string"
    }
  },
  "function": {
    "photoopaf2c8847af2c8847PostConfirmation": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "predictions": {
    "PhotoOpMediaLabeler": {
      "region": "string",
      "type": "string"
    }
  },
  "storage": {
    "UserCreatedMedia": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}