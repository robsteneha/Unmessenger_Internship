use social_media;

-- 1. Identify Users by Location
-- Write a query to find all posts made by users in specific locations such as 'Agra', 'Maharashtra', and 'West Bengal'. Hint: Focus on filtering users by location.
select post_id, user_id, location from post where location like "%agra%" or location like "%maharashtra%" or location like "%west bengal%";

-- 2. Determine the Most Followed Hashtags
-- Write a query to list the top 5 most-followed hashtags on the platform. Hint: Join relevant tables to calculate the total follows for each hashtag.
select h.hashtag_name as top_5_most_followed_hashtags, sq.follow_count from hashtags h inner join (select hashtag_id, count(*) as follow_count from hashtag_follow group by hashtag_id order by follow_count desc limit 5) as sq on h.hashtag_id=sq.hashtag_id;

-- 3. Find the Most Used Hashtags
-- Identify the top 10 most-used hashtags in posts. Hint: Count how many times each hashtag appears in posts.
select h.hashtag_name as top_10_hashtags from hashtags h inner join (select p.hashtag_id, count(*) hashtag_count from post_tags p group by hashtag_id order by hashtag_count desc limit 10) as sq on h.hashtag_id=sq.hashtag_id;

-- 4. Identify the Most Inactive User
-- Write a query to find users who have never made any posts on the platform. Hint: Use a subquery to identify these users.
select username as users_who_never_posted from users where user_id not in (select distinct user_id from post);

-- 5. Identify the Posts with the Most Likes
-- Write a query to find the posts that have received the highest number of likes. Hint: Count the number of likes for each post.
with cte as
(
select post_id, count(*) as likes_count from post_likes group by post_id
)
select post_id as posts_with_highest_likes from cte where likes_count = (select max(likes_count) from cte);

-- 6. Calculate Average Posts per User
-- Write a query to determine the average number of posts made by users. Hint: Consider dividing the total number of posts by the number of unique users.
with cte1 as 
(
select 1 as srno, count(*) as users_c from users
),
cte2 as 
(
select 1 as srno, count(*) as posts from post
)
select round(cte2.posts/cte1.users_c,2) as avg_no_of_posts from cte2 inner join cte1 on cte1.srno=cte2.srno;

-- 7. Track the Number of Logins per User
-- Write a query to track the total number of logins made by each user. Hint: Join user and login tables.
select users.username, sq.no_of_logins from users inner join (select user_id, count(*) no_of_logins from login group by user_id) as sq on sq.user_id=users.user_id order by username;

-- 8. Identify a User Who Liked Every Single Post
-- Write a query to find any user who has liked every post on the platform. Hint: Compare the number of posts with the number of likes by this user.
select username as users_who_have_liked_every_post from users where user_id in (select user_id from (select user_id, count(distinct post_id) as posts_liked_count from post_likes group by user_id) as sq where posts_liked_count=(select count(*) from post));

-- 9. Find Users Who Never Commented
-- Write a query to find users who have never commented on any post. Hint: Use a subquery to exclude users who have commented.
select username as users_who_have_never_commented_on_any_posts from users where user_id in (select user_id from users where user_id not in (select distinct user_id from comments));

-- 10. Identify a User Who Commented on Every Post
-- Write a query to find any user who has commented on every post on the platform. Hint: Compare the number of posts with the number of comments by this user.
select username as users_who_have_commented_on_all_posts from users where user_id in (select user_id from (select user_id, count(distinct post_id) as commented_posts from comments group by user_id) as sq where commented_posts=(select count(*) from post));

-- 11. Identify Users Not Followed by Anyone
-- Write a query to find users who are not followed by any other users. Hint: Use the follows table to find users who have no followers.
select username as users_who_are_not_followed_by_anyone from users where user_id in (select user_id from users where user_id not in (select distinct followee_id from follows));

-- 12. Identify Users Who Are Not Following Anyone
-- Write a query to find users who are not following anyone. Hint: Use the follows table to identify users who are not following others.
select username as users_who_do_not_follow_anyone from users where user_id in (select user_id from users where user_id not in (select distinct follower_id from follows));

-- 13. Find Users Who Have Posted More than 5 Times
-- Write a query to find users who have made more than five posts. Hint: Group the posts by user and filter the results based on the number of posts.
select username as users_with_more_than_5_posts from users where user_id in (select user_id from (select user_id, count(post_id) posts_count from post group by user_id) as sq where posts_count>5);

-- 14. Identify Users with More than 40 Followers
-- Write a query to find users who have more than 40 followers. Hint: Group the followers and filter the result for those with a high followercount.
select username as users_with_more_than_40_followers from users where user_id in (select followee_id from (select followee_id, count(*) as followers_count from follows group by followee_id) as sq where followers_count>40);

-- 15. Search for Specific Words in Comments
-- Write a query to find comments containing specific words like "good" or"beautiful. "Hint: Use regular expressions to search for these words.
select comment_text as comments_containing_good_or_beautiful from comments where comment_text regexp "good|beautiful";

-- 16. Identify the Longest Captions in Posts
-- Write a query to find the posts with the longest captions. Hint: Calculate the length of each caption and sort them to find the top 5 longest ones
select caption as top_5_longest_captions, length(caption) as caption_length from post order by caption_length desc limit 5;

