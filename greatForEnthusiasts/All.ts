type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
	? true
	: false;

type All<X extends readonly unknown[], Y> = X extends readonly [infer First, ...infer Rest]
	? Equal<First, Y> extends true
		? All<Rest, Y>
		: false
	: true;
