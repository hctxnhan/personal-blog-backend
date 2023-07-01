import type { Schema, Attribute } from '@strapi/strapi';

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages';
  info: {
    singularName: 'homepage';
    pluralName: 'homepages';
    displayName: 'Homepage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heroTitle: Attribute.String & Attribute.Required;
    heroSubtitle: Attribute.String & Attribute.Required;
    heroImage: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLabelLabel extends Schema.CollectionType {
  collectionName: 'labels';
  info: {
    singularName: 'label';
    pluralName: 'labels';
    displayName: 'Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::label.label',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::label.label',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPostPost extends Schema.CollectionType {
  collectionName: 'posts';
  info: {
    singularName: 'post';
    pluralName: 'posts';
    displayName: 'Post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    label: Attribute.Relation<'api::post.post', 'oneToOne', 'api::label.label'>;
    content: Attribute.RichText & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    thumbnail: Attribute.Media & Attribute.Required;
    slug: Attribute.UID<'api::post.post', 'title'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface ContentTypes {
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::label.label': ApiLabelLabel;
      'api::post.post': ApiPostPost;
    }
  }
}
