---
title: Add users to Annotation Hub
short: Add users
type: guide
tier: opensource
order: 369
order_enterprise: 0
meta_title: Add users in Annotation Hub Community Edition
meta_description: Sign up for Annotation Hub and invite users to collaborate on your data labeling, machine learning, and data science projects.
section: "Manage Your Organization"
---

Sign up and create an account for Annotation Hub to start labeling data and setting up projects.

!!! error Enterprise
    In Annotation Hub Community Edition, all users have access to the same functionality and can see all projects. 
    
    If you require role-based access and permissions, consider upgrading to Annotation Hub Enterprise. For more information about the user management capabilities of Annotation Hub Enterprise, see [User management overview](https://docs.humansignal.com/guide/manage_users) in the Enterprise documentation. To start a free trial, [click here](https://app.heartex.com/user/trial).  

## Create an account

When you first [start Annotation Hub](start.html), you see the sign up screen.

1. Create an account with your email address and a password.
2. Log in to Annotation Hub.

Accounts that you create are stored locally on the Annotation Hub server and allow multiple annotators to collaborate on a specific data labeling project.

### Create an account through the command line

You can also create an account from the command line when you start Annotation Hub.

```bash
label-studio start --username <username> --password <password> [--user-token <token-at-least-5-chars>]
```

!!! note
    The `--user-token` argument is optional. If you don't set the user token, one is automatically generated for the user. Use the user token for API access. The minimum token length is 5 characters.


## Invite users to Annotation Hub

!!! info Tip
    To invite collaborators, you only need a single Annotation Hub instance, and all your team members should have access to it. If you want to build a simple solution that exposes Annotation Hub outside of your local network, you can [try ngrok](https://labelstud.io/guide/start.html#Expose-a-local-Label-Studio-instance-outside-using-ngrok).

Once the initial organization account is created, you can begin inviting users:

1. Open Annotation Hub and click the menu in the upper left. 
2. Select **Organization**. 
3. From the Organization page, click **Add People**. 

From here you can copy a link that is unique to your organization. 

You can share this link with users, who can then complete the registration process. 

Click **Reset Link** to reset the link. When reset, anyone who have the old link will be unable to register a new user account. 

!!! warning Security Note
    Resetting the invitation link is a security measure that should be part of a broader strategy of controlling access, which includes disabling the signup page. See [Require invites for new users](#Require-invites-for-new-users) below. 

## Require invites for new users

While you can invite users to join your organization with the invite link, this does not prevent users from registering new account through the signup page. 

To ensure that only users with an invite link are able to join, you must configure your environment variables. 

### Restrict signup for local deployments

To disable the signup page unless someone uses the invitation link, enter the following command after installing Annotation Hub:

```bash
export LABEL_STUDIO_DISABLE_SIGNUP_WITHOUT_LINK=true
```

### Restrict signup for cloud deployments

To restrict signup to only those with a link on cloud deployments, set the following environment variables after you install but before you start Annotation Hub:

```
LABEL_STUDIO_DISABLE_SIGNUP_WITHOUT_LINK=true
LABEL_STUDIO_USERNAME=<username>
LABEL_STUDIO_PASSWORD=<password>

# token is optional, it is generated automatically if not set
LABEL_STUDIO_USER_TOKEN=<token-at-least-5-chars>
```

Once set, you can start Annotation Hub and log in with the username and password that you set as environment variables.
