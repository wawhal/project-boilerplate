const requiredEnvVars = {
	PORT: true
};

export const validateEnvVars = (env: Record<string, string>) => {
	const envVars = Object.keys(requiredEnvVars);
	for(const envVar of envVars) {
		if (!env[envVar]) {
			throw new Error(`Env var ${envVar} is required to run API service`);
		}
	}
}

export const getEnvVar = (key: keyof typeof requiredEnvVars) => {
	return process.env[key] || '';
}
