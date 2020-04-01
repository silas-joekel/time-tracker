export interface Activity {
    id: string;
    start: Date;
    end: Date;
    label: string;
}

export type RunningActivity = Omit<Activity, 'end'>;
