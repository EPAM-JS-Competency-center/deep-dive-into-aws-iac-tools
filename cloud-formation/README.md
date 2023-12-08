# AWS CloudFormation

## CLI commands

NB: AWS CLI must be installed and configured proper AWS credentials (AWS profile)

CloudFormation CLI reference [@link](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-using-cli.html)

## Working with CloudFormation templates

### Validate the template

```shell
TEMPLATE_PATH="cloud-formation/template-anatomy.yaml"
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation validate-template \
  --template-body "file://$TEMPLATE_PATH" \
  --profile "$PROFILE" \
  --region "$REGION"
```

### Create/Deploy a CloudFormation stack

```shell
STACK_NAME="demo-stack-cli"
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation deploy \
  --template-file "./cloud-formation/template-anatomy.yaml" \
  --stack-name "$STACK_NAME" \
  --parameter-overrides "$(cat ./cloud-formation/template-anatomy.parameters.toml)" \
  --capabilities CAPABILITY_NAMED_IAM \
  --profile "$PROFILE" \
  --region "$REGION"
```

### Create a change set for the stack

```shell
STACK_NAME="demo-stack-cli"
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation deploy \
  --template-file "./cloud-formation/template-anatomy.yaml" \
  --stack-name "$STACK_NAME" \
  --parameter-overrides "$(cat ./cloud-formation/template-anatomy.parameters.toml)" \
  --capabilities CAPABILITY_NAMED_IAM \
  --profile "$PROFILE" \
  --region "$REGION" \
  --no-execute-changeset
```

### Describe the stack

```shell
STACK_NAME="demo-stack-cli"
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation describe-stacks \
  --stack-name "$STACK_NAME" \
  --profile "$PROFILE" \
  --region "$REGION"
```

### Describe stack events

```shell
STACK_NAME="demo-stack-cli"
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation describe-stack-events \
  --stack-name "$STACK_NAME" \
  --profile "$PROFILE" \
  --region "$REGION"
```

### List change sets

```shell
STACK_NAME="demo-stack-cli"
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation list-change-sets \
  --stack-name "$STACK_NAME" \
  --profile "$PROFILE" \
  --region "$REGION"
```

### Describe change set

```shell
CHANGE_SET_ARN="arn:aws:cloudformation:us-east-1:724443507988:changeSet/awscli-cloudformation-package-deploy-1701956243/8deddda5-ab68-44bd-bb7e-6972197933b6"
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation describe-change-set \
  --change-set-name "$CHANGE_SET_ARN"
  --profile "$PROFILE" 
  --output yaml
```

### Execute the change set

```shell
CHANGE_SET_ARN="arn:aws:cloudformation:us-east-1:724443507988:changeSet/awscli-cloudformation-package-deploy-1701956243/8deddda5-ab68-44bd-bb7e-6972197933b6"
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation execute-change-set \                                                        <aws:personalAccount>
  --change-set-name "$CHANGE_SET_ARN" \
  --profile "$PROFILE"
```

### Destroy the stack

```shell
STACK_NAME="demo-stack-cli"
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation delete-stack \
  --stack-name "$STACK_NAME" \
  --profile "$PROFILE" \
  --region "$REGION"
```

### List CloudFormation stacks

In JSON format

```shell
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation describe-stacks \
  --profile $PROFILE \
  --region $REGION \
  --output json
```
In YAML format

```shell
PROFILE="personalAccount"
REGION="us-east-1"
aws cloudformation describe-stacks \
  --profile $PROFILE \
  --region $REGION \
  --output yaml
```

