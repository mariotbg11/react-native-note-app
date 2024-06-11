import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/customButton";

const NoteCard = ({ item, setCurrentPage, deleteNote, setNoteEdit }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardDesc}>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#F8DE22"
        color="#000"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setNoteEdit(item);
          setCurrentPage("edit");
        }}
      />
      <CustomButton
        backgroundColor="#FF0000"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          deleteNote(item.id);
        }}
      />
    </View>
  </View>
);

const Home = ({ noteList, setCurrentPage, deleteNote, setNoteEdit }) => (
  <View style={styles.container}>
    <CustomButton
      backgroundColor="#fff"
      color="#000"
      text="Tambahkan Note"
      width="100%"
      onPress={() => {
        setCurrentPage("add");
      }}
    />
    {noteList.length === 0 ? (
      <View style={styles.noNotesContainer}>
        <Text style={styles.noNotes}>Tidak ada catatan</Text>
      </View>
    ) : (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={noteList}
        renderItem={({ item }) => (
          <NoteCard
            item={item}
            setCurrentPage={setCurrentPage}
            deleteNote={deleteNote}
            setNoteEdit={setNoteEdit}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 45,
    paddingHorizontal: 20,
    backgroundColor: "#022C43",
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "1px solid rgba(255, 255, 255, 0.3)",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  cardTitle: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  cardDesc: {
    color: "#fff",
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  noNotesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 325,
  },
  noNotes: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Home;
