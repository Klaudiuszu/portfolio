import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'jhaepvjk',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'sk5PblkFl19POTTGQpToToOmoyQC4zKyrsktrVgY0O3rVfT7E3849tPGcm5m85DZxBlYMgPqEt9EfL5hj0fYIUKTjIsIb99I1nEBamRfQq5h5wXJ3CpXDcISL1EVK1P31y1GrMGaz1iPkXxLQZbId65bWAYQal7mV5HuICEhUi9DNausIQSm',
    ignoreBrowserTokenWarning: true,

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);