import zipfile
import xml.etree.ElementTree as ET

def read_docx(file_path):
    try:
        document = zipfile.ZipFile(file_path)
        xml_content = document.read('word/document.xml')
        document.close()
        tree = ET.XML(xml_content)
        
        WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        TEXT_TAG = WORD_NAMESPACE + 't'
        
        paragraphs = []
        for paragraph in tree.iter(WORD_NAMESPACE + 'p'):
            texts = [node.text for node in paragraph.iter(TEXT_TAG) if node.text]
            if texts:
                paragraphs.append("".join(texts))
                
        return "\n".join(paragraphs)
    except Exception as e:
        return str(e)

print(read_docx("c:/Users/Siddhant/Desktop/New folder/cultureArc/cultureArc website/CultureArc X.docx"))
