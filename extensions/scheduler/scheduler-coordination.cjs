"use strict";

function reconcileSnapshot(snapshot, currentRevision, install, reconcile) {
	if (snapshot.revision <= currentRevision) return false;
	install(snapshot.tasks, snapshot.revision);
	reconcile();
	return true;
}

module.exports = { reconcileSnapshot };
