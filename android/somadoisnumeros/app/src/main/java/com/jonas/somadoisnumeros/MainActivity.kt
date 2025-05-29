package com.jonas.somadoisnumeros

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.cursodedesenvolvimentodesoftware.somadoisnumeros.views.SomaDoisNumeros
import com.jonas.somadoisnumeros.ui.theme.SomaDoisNumerosTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            SomaDoisNumerosTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    SomaDoisNumeros(
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}

