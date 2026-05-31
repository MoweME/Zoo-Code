import { workspace } from "vscode"
import { Package } from "../../shared/package"

export function getDefaultHeaders(customUserAgent?: string) {
	return {
		"HTTP-Referer": "https://github.com/Zoo-Code-Org/Zoo-Code",
		"X-Title": "Zoo Code",
		"User-Agent": customUserAgent || `ZooCode/${Package.version}`,
	}
}

// Get custom user agent from VSCode settings
function getCustomUserAgent(): string | undefined {
	try {
		const config = workspace.getConfiguration("zoo-code")
		const customUserAgent = config.get<string>("customUserAgent")
		return customUserAgent && customUserAgent.trim() ? customUserAgent.trim() : undefined
	} catch {
		// If settings are not available (e.g., in certain contexts), return undefined
		return undefined
	}
}

// Default headers with support for custom user agent from settings
export const DEFAULT_HEADERS = getDefaultHeaders(getCustomUserAgent())
