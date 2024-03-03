const identity = <T,>(arg: T): T => {
	return arg;
};

const mapArray = <T, X>(arr: T[], fn: (val: T) => X) => arr.map(fn);
