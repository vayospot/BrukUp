# Firestore Database Structure for BrukUp App

## 1. Collection: `users`

- **Purpose**: Stores all user profiles and related information, including journals and personal chats.

### Document: `/users/{userId}`

- **Fields**:
  - `uid`: string (The unique user ID, usually generated by Firebase Authentication)
  - `profilePicUrl`: string (URL of the user's profile picture)
  - `fullName`: string (Full name of the user)
  - `age`: number (Age of the user)
  - `email`: string (Email address of the user)
  - `bio`: string (A short description about the user)
  - `createdAt`: timestamp (Date and time of user account creation)
  - `townsJoined`: array of strings (List of town IDs the user has joined)

#### Subcollection: `/users/{userId}/journal`

- **Purpose**: Stores personal journal entries for the user.

  ##### Document: `/users/{userId}/journal/{journalId}`


  - `title`: string (Title of the journal entry)
  - `content`: string (Main text content of the journal)
  - `createdAt`: timestamp (Date and time the journal was created)
  - `updatedAt`: timestamp (Date and time the journal was last updated)

---

## 2. Collection: `chats`

- **Purpose**: Stores all chat sessions between users.

### Document: `/chats/{chatId}`

- **Fields**:
  - `chatId`: string (Unique chat ID, e.g., "chat_user1_user2")
  - `participants`: array of strings (List of user IDs in the chat, e.g., ["user1", "user2"])
  - `lastMessage`: string (A preview of the most recent message exchanged)
  - `lastMessageAt`: timestamp (The time the last message was sent)

#### Subcollection: `/chats/{chatId}/messages`

- **Purpose**: Stores the actual messages exchanged in a chat session.

  ###### Document: `/chats/{chatId}/messages/{messageId}`


  - `senderId`: string (User ID of the sender)
  - `content`: string (The text content of the message)
  - `createdAt`: timestamp (Date and time the message was sent)

---

## 3. Collection: `townsquare`

- **Purpose**: Stores information about the group towns where users gather to talk (like audio spaces).

### Document: `/townsquare/{townId}`

- **Fields**:
  - `townName`: string (Name of the town, e.g., "Heartbreak Recovery")
  - `townBio`: string (A short description or bio of the town)
  - `createdAt`: timestamp (Date and time the town was created)
  - `createdBy`: string (User ID of the person who created the town)
  - `folksCount`: number (The number of members)

#### Subcollection: `/townsquare/{townId}/folks`

- **Purpose**: Stores all folks in a town.

  ###### Document: `/townsquare/{townId}/folks/{folksId}`


  - `joinedAt`: timestamp (when a folk joined)

---

## Hints and Notes:

- **User Profiles**: All users are stored in the `users` collection with their basic profile info, and each user document can contain their journals and a reference to their chats.
- **Chat Storage**: The `chats` collection serves as the central storage for all conversations. Each chat document has a subcollection for messages, storing the individual exchanges between users.
- **Town Functionality**: The `townsquare` collection allows users to join group conversations. Each town has its own set of members.
- **Subcollections**: Using subcollections for `messages` inside `chats` helps to keep related data (such as messages) easily accessible and avoid flat document structures that could be harder to query efficiently.

---

## Security Considerations:

- **User Journals**: Access should be restricted so that only the user who owns the journal can view or edit their entries.
- **Chat Access**: Only participants in a chat should have access to the chat and its messages.
- **Town Membership**: Only members of a town should be able to participate in conversations or see messages.