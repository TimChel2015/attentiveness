# Build js/main.js and sync files for GitHub Pages
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$files = @('i18n.js', 'game.js', 'ui.js', 'app.js')
$loginSrc = Join-Path $root 'js\auth\login.js'

$header = "/** Attention Trainer - bundled script (auto-generated)`r`n *  Edit files in js/ and run: .\build.ps1`r`n */`r`n"

$content = $header
$content += [System.IO.File]::ReadAllText((Join-Path $root "js\i18n.js"))
$content += "`r`n"
$content += [System.IO.File]::ReadAllText($loginSrc)
$content += "`r`n"
foreach ($name in $files) {
    if ($name -eq 'i18n.js') { continue }
    $content += [System.IO.File]::ReadAllText((Join-Path $root "js\$name"))
    $content += "`r`n"
}

$utf8 = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText((Join-Path $root 'js\main.js'), $content, $utf8)

Copy-Item (Join-Path $root 'css\styles.css') (Join-Path $root 'styles.css') -Force

foreach ($name in @('i18n.js', 'game.js', 'ui.js', 'app.js')) {
    Copy-Item (Join-Path $root "js\$name") (Join-Path $root $name) -Force
}

$authDeployRoot = Join-Path $root 'auth'
if (-not (Test-Path $authDeployRoot)) {
    New-Item -ItemType Directory -Path $authDeployRoot | Out-Null
}
Copy-Item $loginSrc (Join-Path $authDeployRoot 'login.js') -Force
Copy-Item $loginSrc (Join-Path $root 'login.js') -Force

Copy-Item (Join-Path $root 'js\main.js') (Join-Path $root 'main.js') -Force

$oldAuthFiles = @('auth.js', 'auth-ui.js', 'auth-controller.js')
foreach ($name in $oldAuthFiles) {
    $path = Join-Path $authDeployRoot $name
    if (Test-Path $path) { Remove-Item $path -Force }
}

Write-Host 'Built main.js (upload this!), styles.css, and js/ sources'
