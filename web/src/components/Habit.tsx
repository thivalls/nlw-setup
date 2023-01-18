interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return (
        <div className="flex items-center justify-center bg-slate-900 text-white text-center w-10 h-10 m-2 rounded">
            {props.completed}
        </div>
    )
}