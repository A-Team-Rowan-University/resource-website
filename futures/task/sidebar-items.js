initSidebarItems({"fn":[["current","Returns a handle to the current task to call `notify` at a later date."],["init","Initialize the `futures` task system."],["is_in_task","Return whether the caller is running in a task (and so can use task_local!)."],["with_unpark_event","For the duration of the given callback, add an \"unpark event\" to be triggered when the task handle is used to unpark the task."]],"struct":[["AtomicTask","A synchronization primitive for task notification."],["LocalKey","A key for task-local data stored in a future's task."],["Task","A handle to a \"task\", which represents a single lightweight \"thread\" of execution driving a future to completion."],["UnparkEvent","A set insertion to trigger upon `unpark`."]],"trait":[["EventSet","A concurrent set which allows for the insertion of `usize` values."]]});