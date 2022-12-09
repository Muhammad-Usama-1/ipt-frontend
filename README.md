# Getting Started with Internet Programming Technique

TODO: Solve bug in people you many know (remove login user , conflict in request and uknow)
TODO: chating in person test
DONE: Friend profile page can be view with proper friend id

FEATURES:

1. Login with email and password
1. Signup with name email and password
1. Profile Edit with detail like phone no gender address maritual status etc
1. Friends List in your feed
1. Get data in your feeds (Homepage)
1. Post data in feed (with text and image )
1. Send friend request to anyone (Including Peple you may know m accepting request features too)
1. Chating system (currently only in public room ) todo: one to one

## Folder structure

Generated using tree command in linux have to install

```bash
sudo apt  install tree
```

── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
├── api
│   └── client.js
├── app
│   └── store.js
├── App.js
├── assets
│   ├── images
│   │   ├── page-header.jpg
│   │   └── profile-header.jpg
│   ├── posts.json
│   └── user.jpg
├── components
│   ├── AppBar.js
│   ├── AppBtn.js
│   ├── AppSearchBar.js
│   ├── cards
│   │   ├── EventCard.js
│   │   ├── FriendCard.js
│   │   ├── FriendsPhotoCard.js
│   │   ├── GroupCard.js
│   │   ├── index.js
│   │   ├── PageHeaderCard.js
│   │   ├── PhotosCard.js
│   │   ├── PostCard.js
│   │   ├── ProfileEventCard.js
│   │   ├── StoryCard.js
│   │   ├── UpcomingBirthdayCard.js
│   │   ├── UserAboutCard.js
│   │   ├── UserCard.js
│   │   └── UserDetailCard.js
│   ├── ChatBlock.js
│   ├── CreatePostModal.js
│   ├── EmededVideo.js
│   ├── FreindsSidebar.js
│   ├── Layout.js
│   ├── MessageBody.js
│   ├── ProfileEditTab.js
│   ├── Sidebar.js
│   ├── Tab.js
│   └── VerticalContent.js
├── context
│   ├── friendContext.js
│   └── userContext.js
├── hooks
│   ├── useLocalStorage.js
│   └── UseToken.js
├── index.css
├── index.js
├── pages
│   ├── ChatPage.js
│   ├── FeedPage.js
│   ├── FriendListPage.js
│   ├── FriendProfilePage.js
│   ├── FriendRequestPage.js
│   ├── GroupPage.js
│   ├── LoginPage.js
│   ├── NotFoundPage.js
│   ├── NotificationPage.js
│   ├── ProfileBadgePage.js
│   ├── ProfileEditPage.js
│   ├── ProfileEventPage.js
│   ├── ProfilePage.js
│   ├── ProfilePhotoPage.js
│   ├── ProfileVideoPage.js
│   └── SignupPage.js
├── Router
│   ├── ProtectedRoute.js
│   └── PublicRoute.js
└── styles
├── AuthScreensStyle.css
├── ChatStyle.css
├── FeedStyle.css
├── friendListStyle.css
├── FriendProfileStyle.css
├── FriendRequestStyle.css
├── FriendsSidebar.css
├── golbalStyles.css
├── GroupScreenStyle.css
├── layoutStyle.css
├── NotificationScreenStyle.css
├── PostStyle.css
├── ProfileBadgeStyle.css
├── profileEventStyle.css
├── ProfilePhtScreenStyle.css
├── ProfileScreenStyle.css
├── ProfileVideoStyle.css
├── sidebarStyle.css
├── TabStyle.css
└── Video.css

13 directories, 87 files
