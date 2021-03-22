---
layout: post
title: "The first 10 things to do after creating your AWS account"
description: "Build yourself a secure account, an inventory to manage all your AWS resources, get started with cost management and budget alerts, and set up AWS services that make your life easier. "
date: 2021-03-16 07:41:00 +0100
thumbnail: "/assets/images/post-thumbs/first-ten-things-to-do-after-creating-your-aws-account.png"
category: Tech tip
---

<!-- prettier-ignore -->
 * TOC
<!-- prettier-ignore -->
{:toc}

I see you sitting in front of your screen right after your AWS registration realizing that you stepped into a whole new universe. You can't wait to start building your next exciting project, but you are missing some context in this new world.

You found a new set of strange moving parts and you think it would be wise to learn a bit more about them before jumping right in. The same thoughts came to me when I first created an AWS account, and they keep coming back when sometimes I create new accounts for various projects.

So, this is a note to anybody starting a new AWS account and also a note to myself for future projects.

The main reason to follow these steps is to address some of the concerns along these lines:

- secure your account
- start implementing the principle of least privilege
- learn where to find an inventory of your resources in AWS
- set up a strategy to manage your AWS resources
- get started with cost management and billing

These points give a foundation to your future activities. Your account will certainly grow and even if you use the free tier and just play around, you'll find that you can create a considerable number of resources in a pretty short timeframe.

Managing AWS resources manually is tedious even in a sandbox context. Learning the ways of AWS early in the process will help you scale as your projects grow.

### Secure your root account

_Prerequisite_: you successfully signed up for a new AWS account on [https://portal.aws.amazon.com/billing/signup](https://portal.aws.amazon.com/billing/signup){:target="\_blank"}.

When you sign up for an AWS account, AWS creates what they call the **root account**.

The root account, as the name suggests, is at the root of your AWS universe, it has all the power over all your AWS resources and full access to your AWS billing.

No matter if you work in a team or you just experiment alone, it is essential to **secure** **your root account and not use it for day to day activities.**

First, we secure the root account and I show you how to create a new administrator account in the next step.

Follow the below steps to secure the root account:

1. Sign in to the [AWS Console](https://console.aws.amazon.com/){:target="\_blank"} with the root account.
2. When in the Console, open the account menu; it's the third item in the top right corner next to the Support and Region menus.
3. Pick `My Security Credentials` from the account menu.
4. Go to the Multi Factor authentication (MFA) section on the security credentials page and enable MFA. Enabling MFA means that you login in with your username, password and a security token generated by an MFA device. The easiest way is to use an authenticator app like Google Authenticator, Authy or LastPass authenticator.
5. Sign out using the account menu in the top menu bar and sign back in with MFA and open up `My Security Credentials` again.
6. In the access keys section (right below MFA) remove any access keys you find.
7. In the password section (right above MFA) set a strong password and save it to a secure password management solution like LastPass.
8. Sign out and sign back in to test your new setup.

### Create an administrator account

AWS provides the identity and access management (IAM) service for us to manage users and user groups. AWS access management is a broader topic, but we focus only on your first user now.

We create a user with administrator access and we also grant access to billing matters. This covers most of the power you would have with the root account. Creating the administrator user is beneficial, because you can always go back to the root account in case the administrator user gets compromised.

We create an administrator user, but we won't grant access to the user directly, we use a user group to implement a more scaleable approach.

It is your job to learn more about the available policies and fine tune your users and their access rights to your specific needs, this is just a first example to get you started.

Follow the below steps to create the administrator user and user group:

1. Sign in to the AWS Console, type **`IAM`** into the search bar and click `IAM` under services in the search results.
2. Pick the `Groups` menu on the left and click the `Create New Group` button.
3. Provide the name `Administrators` in the first step.
4. Attach the `AdministratorAccess` and `Billing` policies in the `Attach Policy` step. Use the search bar to find the policies.
5. Review and create the user group.
6. Create a user called `administrtor` , tick both the programmatic access (for the AWS cli) and console access.
7. Set a strong password and click next.
8. Add the user to the `Administrators` group. We talk about tags later, so let's skip it for now and please come back later. Review and create the user.
9. Copy your account id into a secure vault like LastPass, you need it when you sign back in. The account id is the 12 digit numeric identifier in the `My Account` menu.
10. Sign out and sign back in. Pick the IAM user option when prompted and user the administrator user credentials.
11. Enable MFA for the administrator account same way we did for the root account.

### Create a password policy

IAM lets you define a password policy for your account.

You can specify password length, complexity and expiration requirements for all users in your account.

Follow the below steps to change the password policy:

1. Go to the IAM service and pick `Account settings` on the left.
2. Click `Change Password Policy`.
3. Customize the settings and save changes.

### Create a billing alert

Cost management is essential in your AWS account.

In the beginning it is very important to make sure you don't get unexpected charges on AWS. In the long run it's vital to create and operate cost effective solutions in the cloud.

AWS gives you the billing dashboard to manage your finances. You can define budgets in the billing dashboard and create alerts to notify you when your AWS usage hit a certain threshold.

Follow the below steps to create a billing alert

1. Go to `My Billing Dashboard` in the Account menu.
2. Open `Billing prefernces` in the left sidebar menu.
3. Tick `Receive Free Tier Usage Alerts` to receive email alerts when you approach the free tier limits. Save your preferences.
4. Click `Budgets` in the left side menu.
5. Click `Create budget` and follow the screens.
6. Alerts are part of the wizard.

### Build an eye for regions

An AWS region is a geographic region on the planet. AWS has regions like US East (Ohio), US West (Oregon), Europe (Frankfurt), Europe (London) and many more in Asia Pacific, Africa, Canada and the Middle East.

Every AWS resource that you create is created in one of the AWS regions. AWS has physical facilities in the regions and your resources are physically placed into the location specified by the region.

This way you can place your resources close to your customers and you can make sure to comply with regulations and legal requirements keeping your resources and data within geographic boundaries.

When you work with the AWS console, you'll soon notice that it has a region menu in the upper right corner (right next to `Support`). The infrastructure related activities are tied to a region, so in order to follow exactly what's going on in your account, you need to build the habit to check the region with every activity you do on the console (and the cli).

Note that the billing dashboard and IAM are global services.

### Understand where to find used resources

You can use the console to start and manage AWS services individually by picking the service from the menu.

In order to get the big picture of the resources you use you can use the AWS Resource Groups and Tag Editor service.

You might expect to have a dedicated report or dashboard to provide an overview of all your resources, like you would with light weight cloud provider. Due to the complexity of AWS such a report or Dashboard does not exist, you use the tag editor to search for your resources.

Follow the below steps to see all of your AWS resources:

1. Open the `Resource Groups and Tag Editor` service (use the search bar in the Console to find it).
2. Go to Tag Editor under Tagging.
3. Pick `All regions` and `All supported resource types` from the menu.
4. Click `Search resources`, note the progress bar at the end of the list. Results don't come immediately, you may need to wait a little.

Note that even with a fresh registration you'll get a long list of resources. This is because AWS has default resources most of which are the default network components pre-configured in every AWS region for you.

### Set up a tagging strategy and your first tags

As you start using services for various projects, you'll want to have a way to find resources that belong to the same activity.

You can use tags in AWS to make this happen. Tags are just key-value pairs you assign to AWS resources. A tag may look like this:

- Key: project
- Value: MyFirstProject

You can assign maximum 50 tags to an AWS resource. AWS may also assign tags to your resources (so called system tags) for administrative purposes.

There are some tagging best practices out there, let me suggest a few simple rules to get started:

- Use tag keys and tag values in all lowercase. (AWS system tags are also lowercase).
- Use `:` to create fine grained tags. Adding your company name or some other identifier to your tag keys helps you find your own tags later. An example tag may look like this:
  - Key: `mycompany:environment`
  - Value: `development`
- Environment information, project name and cost center are good tag candidates in the beginning.

### Understand the AWS shared responsibility model

It is crucial to understand that you are responsible for what happens in your cloud.

AWS is responsible for **security of the cloud**, which means the underlying infrastructure including hardware, software, the network and physical facilities.

You are responsible for **security in the cloud**. Although AWS gives you the infrastructure, it is your job to secure the applications including network configuration, encryption, operation systems, applications and platforms, customer data and network traffic.

The boundaries may be determined by the AWS service you use. [Please read this document](https://aws.amazon.com/compliance/shared-responsibility-model/){:target="\_blank"}.

### Install the AWS CLI

Besides the AWS Console, we have the AWS cli to manage our AWS resources.

The cli has a smooth learning curve, it's logical and does make your life much easer. Use it to create, list and manage resources.

Use [this guide to install](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html){:target="\_blank"} and [this guide to configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html){:target="\_blank"} the AWS cli.

### Pick your favorite services

You might have notices the `Services` menu in the upper left on the AWS Console. This menu has quick access shortcuts for various resources.

It's a good idea to pick your favorite resources that will appear on top in a dedicated section. You can do so by clicking the little start next to a service name in the `Services` menu. The stars becomes visible when you hover over a service name.

You may want to add `IAM`and `Resource Groups and Tag Editor` to your favorites now.

### Next steps

I hope this list helps you get started. Moving on from here I suggest to learn more about AWS and its services. AWS offers both free and paid training on [the AWS training website](https://www.aws.training/){:target="\_blank"}.

If you are new to AWS, it is essential to learn about [CloudWatch](https://aws.amazon.com/cloudwatch/){:target="\_blank"} and [CloudTrail](https://aws.amazon.com/cloudtrail/){:target="\_blank"} to be able to monitor what's going on in your account.

Also check out [CloudFormation](https://aws.amazon.com/cloudformation/){:target="\_blank"}, AWS's infrastructure as code solution that lets you describe your resources in yml or JSON files and manage them through the cli. You can achieve high level of automation and better quality with CloudFormation.