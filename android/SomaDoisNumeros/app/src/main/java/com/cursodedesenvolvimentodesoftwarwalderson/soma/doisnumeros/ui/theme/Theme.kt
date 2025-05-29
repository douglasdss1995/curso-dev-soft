package com.cursodedesenvolvimentodesoftwarwalderson.soma.doisnumeros.ui.theme

import android.app.Activity
import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalContext
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.DarkPrimary
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.DarkSecondary
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.DarkTertiary
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.LightPrimary
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.LightSecondary
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.ui.theme.LightTertiary

private val DarkColorScheme = darkColorScheme(
    primary = DarkPrimary,
    secondary = DarkSecondary,
    tertiary = DarkTertiary
)

private val LightColorScheme = lightColorScheme(
    primary = LightPrimary,
    secondary = LightSecondary,
    tertiary = LightTertiary
)

@Composable
fun SomaDoisNumerosTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    // Dynamic color is available on Android 12+
    dynamicColor: Boolean = true,
    content: @Composable () -> Unit
) {
    val colorScheme = when {
        dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
            val context = LocalContext.current
            if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
        }

        darkTheme -> DarkColorScheme
        else -> LightColorScheme
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}