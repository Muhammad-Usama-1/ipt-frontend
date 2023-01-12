# Getting Started with Internet Programming Technique

TODO: Solve bug in people you many know (remove login user , conflict in request and uknow)
TODO: chating in person test
DONE: Friend profile page can be view with proper friend id

FEATURES:

1. Login with email and password
1. Signup with name email and password
1. Profile Edit with detail like phone no gender address maritual status contact etc (complex photo)
1. Friends List in your feed
1. Get data in your feeds (Homepage)
1. Like the post (calculate total like of post)
1. Post data in feed (with text and image and proper image optimization in backend )
1. Send friend request to anyone (Including Peple you may know accepting request features too)
1. Accept friend request
1. Chating system (currently data is not presitent ) , proper user photo

## Folder structure

Generated using tree command in linux have to install

```bash
sudo apt  install tree
```

# BUGs

TODO : set frined context in one place
BUG : if there is no friend or post in db then it will always show loading in UI

Updating 8f6cb27..fd4f2cb
Fast-forward
README.md | 1 +
src/App.js | 27 ++++++++++++++++++++++++---
src/components/AppBar.js | 2 +-
src/components/AppSearchBar.js | 5 +----
src/components/FreindsSidebar.js | 55 ++++++++++++++++++++++++-------------------------------
src/components/Tab.js | 16 ++++++----------
src/components/cards/FriendCard.js | 18 ++++--------------
src/components/cards/FriendsPhotoCard.js | 23 ++++-------------------
src/components/cards/PhotosCard.js | 8 ++++++--
src/components/cards/PostCard.js | 6 ++++--
src/pages/ChatPage.js | 22 +++++++---------------
src/pages/FeedPage.js | 23 +++++------------------
src/pages/FriendListPage.js | 35 ++++-------------------------------
src/pages/FriendProfilePage.js | 25 ++++++-------------------
src/pages/FriendRequestPage.js | 24 +++++++++---------------
src/pages/LoginPage.js | 34 ++++++++++++++++++++++++++--------
src/pages/ProfilePage.js | 12 ++----------
src/pages/SignupPage.js | 14 +++++---------
18 files changed, 139 insertions(+), 211 deletions(-)
