module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["import", "@typescript-eslint", "prettier"],
    extends: [
        "airbnb-base",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "eslint:recommended"
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
    env: {
        browser: true,
        node: true
    },
    ignorePatterns: ["node_modules/", "tsconfig.json"],
    rules: {
        /**
            console�� ����� �� �ְ� ���ִ� ���
            error => error�� ����
            warn => warning���� ����
            ������ ���� error�� �ٲ� console.log�� ��������
        */
        "no-console": "off",
        "prettier/prettier": [
            "error",
            {
                /**
                    �� �ü�� ���� �� �ٲ��� ǥ���ϴ� ����� �����ϱ� ������ �߻��� ����
                    endOfLine�̶�� ������ �߻����� �� �ü�� ���� ������ ���� ����϶�� �ǹ�
                */
                endOfLine: "auto"
            }
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never"
            }
        ],
        /*
            class member(����, �Լ�)�� ������ �� �� �� ������� �Ѵ�.
            exceptAfterSingleLine => �� ���� ��� (memeber variable ������)
        */
        "lines-between-class-members": [
            "error",
            "always",
            { exceptAfterSingleLine: true }
        ],
        "no-explicit-any": false
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
};
