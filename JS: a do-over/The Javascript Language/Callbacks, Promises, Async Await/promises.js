const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
     setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `${post.title} <br>`
        });
        document.body.innerHTML = output;
     }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('ERROR ERROR ERROR')
            }
        }, 2000);
    })
} 

// createPost({title: 'Post Three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

async function init() {
    await createPost({title: 'Post Three', body: 'This is post three'});
    getPosts();
}
init();