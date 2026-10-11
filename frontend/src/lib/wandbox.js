const WANDBOX_API = "https://wandbox.org/api/compile.json";

const COMPILER_CONFIG = {
    javascript: "nodejs-20.17.0",
    python: "cpython-3.12.7",
    java: "openjdk-jdk-21+35",
};

export async function executeCode(language, code) {
    try {
        const compiler = COMPILER_CONFIG[language];

        if (!compiler) {
            return {
                success: false,
                error: `Unsupported language: ${language}`,
            };
        }

        const response = await fetch(WANDBOX_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                compiler: compiler,
                code: code,
            }),
        });

        if (!response.ok) {
            return {
                success: false,
                error: `HTTP error! status: ${response.status}`,
            };
        }

        const data = await response.json();

        // Status 0 means code exited successfully
        const isSuccess = data.status == 0 || data.status === "0";
        const output = data.program_output || "";
        const error = data.compiler_error || data.program_error || "";

        if (!isSuccess || error) {
            return {
                success: false,
                output: output || error,
                error: error || "Execution failed",
            };
        }

        return {
            success: true,
            output: output || "No output",
        };
    } catch (error) {
        return {
            success: false,
            error: `Failed to execute code: ${error.message}`,
        };
    }
}
