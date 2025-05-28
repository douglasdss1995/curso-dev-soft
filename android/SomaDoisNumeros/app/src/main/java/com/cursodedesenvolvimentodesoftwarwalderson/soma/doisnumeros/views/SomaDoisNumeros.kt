package com.cursodedesenvolvimentodesoftwarwalderson.soma.doisnumeros.views

import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color.Companion.White
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.cursodedesenvolvimentodesoftwarwalderson.soma.doisnumeros.ui.theme.Black
import com.cursodedesenvolvimentodesoftwarwalderson.soma.doisnumeros.ui.theme.DarkRed
import com.cursodedesenvolvimentodesoftwarwalderson.soma.doisnumeros.ui.theme.green
import com.cursodedesenvolvimentodesoftwarwalderson.soma.doisnumeros.ui.theme.grey

@OptIn(ExperimentalMaterial3Api::class)
@Composable()
fun SomaDoisNumeros(
    modifier: Modifier,
) {
    var number1 by remember { mutableStateOf("") }
    var number2 by remember { mutableStateOf("") }
    var soma by remember { mutableStateOf("") }
    val context = LocalContext.current

    Scaffold(
        topBar ={
            TopAppBar(
                title = {
                    Text(
                        text = "Soma de dois números",
                        fontSize = 25.sp,
                    )
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = DarkRed,
                    titleContentColor = White
                ),
            )
        },
        content = { innerPadding ->
            Column(
                modifier = modifier
                    .padding(innerPadding)
                    .padding(horizontal = 10.dp)
            ) {
                OutlinedTextField(
                    value = number1,
                    onValueChange = {
                        number1 = it
                    },
                    label = { Text("Digite um número") },
                    modifier = Modifier.padding(15.dp,20.dp).fillMaxWidth()
                    )

                OutlinedTextField(
                    value = number2,
                    onValueChange = {
                        number2 = it
                    },
                    label = { Text("Digite um número") },
                    modifier = Modifier.padding(15.dp,20.dp).fillMaxWidth()
                )

                Button(
                    onClick = {
                        soma = (number1.toInt() + number2.toInt()).toString()
                        Toast.makeText(
                            context,
                            "Resultado: $soma",
                            Toast.LENGTH_LONG
                        ).show()
                    },
                    colors = ButtonDefaults.buttonColors(
                        containerColor = DarkRed,
                        contentColor = White,
                    ),
                    modifier = Modifier.padding(8.dp,20.dp).fillMaxWidth()
                ) {
                    Text("Somar")
                }
                Text("Resultado:",
                    fontSize = 25.sp,
                    )
                Text(soma,
                    fontSize = 45.sp,
                    textAlign = TextAlign.Center,
                    color = green,
                    modifier = Modifier.fillMaxWidth().background(Black).height(200.dp).padding(60.dp)
                    )
            }
        }
    )
}
