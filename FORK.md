# Aseba fork

This branch preserves Sebastian Alvarez's concurrency-safe Pi Scheduler build.

## Version

`0.3.1-aseba.2`, based on upstream `v0.3.1`.

## Included changes

- Fix Pi context-wrapper liveness checks so command/tool-created tasks are armed.
- Serialize shared scheduler state with `proper-lockfile`.
- Atomically claim due cwd/global tasks across Pi processes.
- Refresh shared state so already-running agents discover new tasks.
- Prevent duplicate cron catch-up claims.
- Preserve disable/cancel decisions made during an in-flight task.
- Reconcile externally discovered tasks during listing and recover disabled tasks with dead owners.

## Upstream tracking

- Context regression: upstream issue #2 and PR #3.
- Multi-process support: upstream issue #4 and draft PR #5.

The `aseba/main` branch is the persistent deployment branch. Version tags named
`v*-aseba.*` identify tested local releases.
