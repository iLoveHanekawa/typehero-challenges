type MovieInfoByGenre<T> = {
	[key in keyof T]: {
		name: string;
		year: number;
		director: string;
	};
};
