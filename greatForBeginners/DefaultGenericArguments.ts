type RequestMethod = "POST" | "GET" | "UPDATE" | "DELETE" | "PATCH";

type ApiRequest<T extends {}, X extends RequestMethod = "GET"> = {
	data: T;
	method: X;
};

type TSConfig<T extends { strict: boolean } = { strict: true }> = T
