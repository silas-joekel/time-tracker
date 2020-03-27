export interface Activity {
    start: Date;
    end: Date;
    id: string;
}

export type RunningActivity = Omit<Activity, 'end'>;
