export class Service {
	info:string[] = ['Angular2', 'jQuery', 'JavaScript'];
	addInfo(value:any) {
		this.info.push(value);
	}
}