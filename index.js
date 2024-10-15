//js will need to:

//1. if you click on a blog post, open that blog post on a new page
//  this needs an event listener on each blog post displayed in short on the page
//2. if you click on a link, say to "home", open on the home page
//   this needs an event listener on the home link
//3. if you click on a link, say to the "about me" page, open the about me page
//.  this needs an event listener on the about me link
//4. When those links are clicked how do i get to the new page? does it just wipe out what was written there before and populate it with new html?

//create a toggle for the view more button

const viewMoreBtn = document.getElementById("view-more-btn")
const featurePost = document.getElementById("featured-blogpost")
const blogPostsSection = document.getElementById("blog-posts-container")
const mainArticlePage = document.getElementById("main-article-page")
const blogpost = document.getElementsByClassName("blog-post")
const postFour = document.getElementById("post-four")
const postFive = document.getElementById("post-five")
const postSix = document.getElementById("post-six")


function renderBlogPosts() {
    blogPostsSection.style.display = "grid";
}


featurePost.addEventListener("click", function(e){
    //this needs to toggle off the display of the blogposts section and toggle on the display of the featurepost page. It will also need to call on a function renderBlogPosts to render out the blogposts display below it
    blogPostsSection.style.display = "none";
    featurePost.style.display = "none";
    mainArticlePage.style.display = "block"
    renderBlogPosts()
})


viewMoreBtn.addEventListener("click", function(e){
    //perhaps do this by having an "if an item has this classname on it, display should be flex)" kind thing
    console.log('hi')
    const postsList = blogPostsSection.getElementsByClassName("blog-post")
    console.log(postsList)
    
    
    
    
    // if (blogPostsSection.getElementsByTagName('article').length > 3) {
    //     postFour.classList.toggle('view-more')
    // }
    // blogpost.style.display = "flex"; (for post 4, 5, and 6?) how to make this more fluid?!
    //write the toggle function in here to toggle the display of more posts.. so 
    //IF number of posts is greater than 3 ,then toggle display of the next 3 posts. and IF number of posts is greater than that, still display view more etc etc..??
    //will this all the viewing of ALL other blog posts, or just a few more each time you click it? 
})


