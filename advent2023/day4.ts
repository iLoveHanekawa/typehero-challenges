type Address = { address: string; city: string };
type PresentDeliveryList<T extends {}> = {
	[key in keyof T]: Address
}