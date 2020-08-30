var config1 = {
    style: 'mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d',
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    alignment: 'right',
    theme: 'dark',
    title: 'Jean Golding Institute - Food hazards from around the world data competition',
    subtitle: 'Spatio-temporal change in food risk from     ',
    byline: '',
    footer: 'Source: Food Standard Agency, Data from <a href="http://www.bristol.ac.uk/golding/get-involved/competitions/food-hazards-from-around-the-world-data-competition/">JGI Competition (2020)</a>',
    chapters: [
        {
            id: 'glacier-np',
            title: 'Patterns described',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'This visualization helps us identify some clear trends shows some clear trends',
            location: {
                center: [1, 1],
                zoom: 2,
                pitch: 25.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        }
    ]
};

