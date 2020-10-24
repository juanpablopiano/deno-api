import { Band } from '../types.ts';
import { v4 } from 'https://deno.land/std@0.63.0/uuid/mod.ts';

let bands: Band[] = [];

const getBands = ({ response }: { response: any }) => {
	response.body = {
		success: true,
		data: bands,
	};
};

const addBand = async ({ request, response }: { request: any; response: any }) => {
	const body = await request.body();
	if (!request.hasBody) {
		response.status = 400;
		response.body = {
			success: false,
			message: 'The request is empty',
		};
	} else {
		const band: Band = await body.value;
		band.id = v4.generate();
		bands.push(band);
		response.status = 201;
		response.body = {
			success: true,
			data: band,
		};
	}
};

export { getBands, addBand };
