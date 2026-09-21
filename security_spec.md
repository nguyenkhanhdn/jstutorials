# Security Specification (Phase 0: TDD)

## 1. Data Invariants
- `UserProfile` must be created or modified only by the authenticated user whose `uid` matches the document path `{userId}` or an admin.
- `role` must be either `'student'` or `'teacher'`. Non-admin users cannot escalate their role to `'admin'`.
- `LessonProgress` in `/users/{userId}/progress/{lessonId}` must strictly belong to the parent user `{userId}`.
- All IDs must pass `isValidId()` regex and length checks.
- Read operations for a user's profile and progress are restricted to the owner (`userId == request.auth.uid`), teachers for instructional analytics, and admins.

## 2. The "Dirty Dozen" Payloads
1. Unauthorized User Creation (spoofed UID != request.auth.uid) -> PERMISSION_DENIED
2. Privilege Escalation (student setting `role: 'admin'`) -> PERMISSION_DENIED
3. Subcollection Poisoning (writing progress into another student's document) -> PERMISSION_DENIED
4. Giant String Resource Exhaustion (injecting 1MB strings in fullName) -> PERMISSION_DENIED
5. Malformed ID Injection (e.g., path traversal or non-alphanumeric IDs) -> PERMISSION_DENIED
6. Unauthenticated Reads on private student progress -> PERMISSION_DENIED
7. Blanket List Scraping without userId filter -> PERMISSION_DENIED
8. Deleting other users' progress subcollection -> PERMISSION_DENIED
9. Ghost Fields injection (shadow fields not declared in schema) -> PERMISSION_DENIED
10. Unverified Email Admin claims -> PERMISSION_DENIED
11. Missing required fields in UserProfile creation -> PERMISSION_DENIED
12. Negative XP or irrational score values in LessonProgress -> PERMISSION_DENIED
