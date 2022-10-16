const requiredEnvVars = {
	PORT: true
};

export const validateEnvVars = (env: Record<string, string>) => {
	const envVars = Object.keys(requiredEnvVars);
	for(let i = 0; i < envVars.length; i++) {
		if (!env[envVars[i]]) {
			throw new Error(`Env var ${envVars[i]} is required to run API service`);
		}
	}
}

export const getEnvVar = (key: keyof typeof requiredEnvVars) => {
	return process.env[key] || '';
}
