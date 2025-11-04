import type { Schema, Struct } from '@strapi/strapi';

export interface ContactInfoSocialInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_social_infos';
  info: {
    displayName: 'Social_Info';
  };
  attributes: {
    Icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Link: Schema.Attribute.String;
  };
}

export interface MediaEntry extends Struct.ComponentSchema {
  collectionName: 'components_media_entries';
  info: {
    description: '';
    displayName: 'Entry';
    icon: 'bulletList';
  };
  attributes: {
    Text: Schema.Attribute.Blocks;
  };
}

export interface MediaFeaturedProject extends Struct.ComponentSchema {
  collectionName: 'components_media_featured_projects';
  info: {
    description: '';
    displayName: 'Featured Project';
    icon: 'archive';
  };
  attributes: {
    Project_Description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Project_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Project_Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MediaImage extends Struct.ComponentSchema {
  collectionName: 'components_media_images';
  info: {
    displayName: 'Image';
    icon: 'feather';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface MediaImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_media_image_galleries';
  info: {
    displayName: 'Image Gallery';
  };
  attributes: {
    Gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface MediaPressQuote extends Struct.ComponentSchema {
  collectionName: 'components_media_press_quotes';
  info: {
    displayName: 'Press Quote';
  };
  attributes: {
    Press_Quote: Schema.Attribute.Text;
  };
}

export interface MediaValues extends Struct.ComponentSchema {
  collectionName: 'components_media_values';
  info: {
    description: '';
    displayName: 'Rich_Text';
    icon: 'bulletList';
  };
  attributes: {
    Rich_Text: Schema.Attribute.Blocks;
  };
}

export interface MediaVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    Video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-info.social-info': ContactInfoSocialInfo;
      'media.entry': MediaEntry;
      'media.featured-project': MediaFeaturedProject;
      'media.image': MediaImage;
      'media.image-gallery': MediaImageGallery;
      'media.press-quote': MediaPressQuote;
      'media.values': MediaValues;
      'media.video': MediaVideo;
    }
  }
}
