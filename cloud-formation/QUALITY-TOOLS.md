
# CloudFormation code quality tools

## Linting

- **cfn-lint** - CloudFormation template linter

  Install [cfn-lint](https://github.com/aws-cloudformation/cfn-lint)

  **Usage**:

  ```shell
  cfn-lint ./cloud-formation/template-anatomy.yaml
  ```

  **Editor Plugins:**
  There are IDE plugins available to get direct linter feedback from you favorite editor:

    - [Atom](https://atom.io/packages/atom-cfn-lint)
    - [Sublime](https://packagecontrol.io/packages/SublimeLinter-contrib-cloudformation)
    - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=kddejong.vscode-cfn-lint)
    - [IntelliJ IDEA](https://plugins.jetbrains.com/plugin/10973-cfn-lint)

- **cfn-nag** - looks for patterns in CloudFormation templates that may indicate insecure infrastructure
  
  Install [cfn-nag](https://github.com/stelligent/cfn_nag)

  **Usage**:
  
  ```shell
    cfn_nag_scan --input-path ./cloud-formation/template-anatomy.yaml
  ```

  [VS Code cfn-nag linter plugin](https://marketplace.visualstudio.com/items?itemName=eastman.vscode-cfn-nag)

  - **TaskCat** - tests AWS CloudFormation templates (**requires access to your AWS account and Docker installed**)
  
    Install [TaskCat](https://aws-ia.github.io/taskcat/docs/INSTALLATION/)
  
    **Usage**:
    1. Create [.taskcat.yml](.taskcat.yml) in project's root and fill in a [simple config](https://aws-ia.github.io/taskcat/docs/usage/GENERAL_USAGE/)
    2. Execute command 
        
       ```shell
          taskcat test run
        ```
    Here are some additional references:
    - [TaskCat CI/CD Pipeline for AWS CloudFormation](https://aws.amazon.com/solutions/implementations/taskcat-ci/)
    - [TaskCat CI/CD Pipeline for AWS CloudFormation on AWS Partner Solution Deployment Guide](https://aws-ia.github.io/cfn-ps-taskcat-ci/)

