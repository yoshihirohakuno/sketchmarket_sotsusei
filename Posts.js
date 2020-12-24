import React, { useEffect, useState }  from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        "https://service.one-d.io/pmec/wp-json/wp/v2/kumihan_products/?per_page=100"
      );
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }

    loadPosts();
  }, []);
  return (
    <Grid container spacing={2}>
      {posts.map((post, index) => (
        <Grid item xs={4} key={index}>
          <Card>
            <CardContent>
              <Typography
                color="textSecondary"
                gutterBottom
                dangerouslySetInnerHTML={{ __html: post.acf.caption }}              
              />         
              <Typography
                color="textSecondary"
                gutterBottom
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}              
              />  
             </CardContent>    
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

