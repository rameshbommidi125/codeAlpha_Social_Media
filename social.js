function Login() {


    // Clear previous feeds
    document.getElementById('feeds-section').innerHTML = '';

    // Simulate social media feeds
    const feeds = [{
            platform: 'Twitter',
            content: 'Tweet content...'
        },
        {
            platform: 'Facebook',
            content: 'Facebook post content...'
        },
        {
            platform: 'Instagram',
            content: 'Instagram post content...'
        },
    ];
*
    // Display feeds
    const feedsSection = document.getElementById('feeds-section');
    feeds.forEach(feed => {
        const feedCard = document.createElement('div');
        feedCard.className = 'feed-card';
        feedCard.innerHTML = `
            <h3>${feed.platform}</h3>
            <p>${feed.content}</p>
        `;
        feedsSection.appendChild(feedCard);
    });
}