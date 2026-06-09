# Build js/main.js from module files in js/
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$files = @('i18n.js', 'auth.js', 'game.js', 'ui.js', 'app.js')

$header = "/** Attention Trainer - bundled script (auto-generated)`r`n *  Edit files in js/ and run: .\build.ps1`r`n */`r`n"

$content = $header
foreach ($name in $files) {
    $content += [System.IO.File]::ReadAllText((Join-Path $root "js\$name"))
    $content += "`r`n"
}

$utf8 = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText((Join-Path $root 'js\main.js'), $content, $utf8)
Write-Host 'Built js/main.js'
