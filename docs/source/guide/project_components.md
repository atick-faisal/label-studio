---
title: Project components
short: Project components
# type: guide  # this page is not ready, so remove it from everywhere
# tier: all
order: 118
meta_title: Project components
meta_description: "Annotation Hub Documentation for Project components."
section: "Project & Team Management"
---

This page describes the general project components in the Annotation Hub UI.

## Labeling interface

The Annotation Hub interface allows you to label and annotate your data. You can start labeling and annotating your data only after you setup your project, labeling interface, and import your data. For more information, see the [Label and annotate data](labeling.html#Start-labeling) page.

## Annotation

Annotation is the process of labeling data on images. The image may contain humans, vehicles, any objects to make it recognizable for machines. Annotations are of various types, and it can be used to educate machines about the presence of various objects in the world. For more information, see the [Label and annotate data](labeling.html#Start-labeling) page.

<div class="enterprise-only">

## Review

After multiple labelers have annotated tasks, review their output to validate the quality of the results. For more information, see the [Review annotations in Annotation Hub](quality.html) page.

## Members

In the Annotation Hub Enterprise version, you can add members to a specific workspace or add members to a specific project within a workspace. For more information, see [Add members to a project](setup_project.html#Add-members-to-a-project) page.

</div>

## Machine Learning

Use the Annotation Hub ML backend to integrate Annotation Hub with machine learning models. For more information, see [Integrate Annotation Hub into your machine learning pipeline](ml.html) page.

## Cloud Storage

You can add source storage connections to sync data from an external source to a Annotation Hub project, and add target storage connections to sync annotations from Annotation Hub to external storage. For more information, see [Sync data from external storage](storage.html) page.

## Webhook

Webhooks in Annotation Hub allows you to set up integrations that subscribe to certain events which occur inside Annotation Hub. When an event is triggered, Annotation Hub sends an HTTP POST request to the configured webhook URL. For more information, see [Set up webhooks in Annotation Hub](webhooks.html) page.
