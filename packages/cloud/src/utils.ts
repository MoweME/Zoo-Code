import type { ExtensionContext } from "vscode"
import { workspace } from "vscode"

export function getUserAgent(context?: ExtensionContext): string {
	try {
		const config = workspace.getConfiguration("zoo-code")
		const customUserAgent = config.get<string>("customUserAgent")
		
		if (customUserAgent && customUserAgent.trim()) {
			return customUserAgent.trim()
		}
	} catch {
		// If settings are not available, fall back to default
	}
	
	return `Zoo-Code ${context?.extension?.packageJSON?.version || "unknown"}`
}
