 'use client';
import React from 'react';
import Button from '../../ui/Button';
import PainManagementCard from './PainManagementCard';
import { blogPosts } from '@/app/lib/blogPosts';
import Title from '../../ui/Title';
import Subtitle from '../../ui/Subtitle';
 
 
 

const BlogSectionLanding = ({ onBlogClick }) => {
  if (!Array.isArray(blogPosts)) {
    console.error('blogPosts is not an array:', blogPosts);
    return <div>Error loading blog posts</div>;
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Title>
              Pain Management Blog
          </Title>

          <Subtitle>
              Expert insights, practical tips, and evidence-based.
          </Subtitle>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.slug}>
              <PainManagementCard 
                image={post.image}
                title={post.title}
                description={post.description}
                readMoreLink={`/blog/${post.slug}`}  
                className="hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button>View More</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSectionLanding;
