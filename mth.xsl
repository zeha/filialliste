<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text"/>
<xsl:template match="/markers">
<xsl:for-each select="marker">
<xsl:value-of select="./@store_id"/>;<xsl:value-of select="./@latitude"/>;<xsl:value-of select="./@longitude"/>;<xsl:value-of select="./@region"/>;<xsl:value-of select="./@postcode"/>;<xsl:value-of select="./@city" disable-output-escaping="yes"/>;<xsl:value-of select="./@street" disable-output-escaping="yes"/><xsl:text>&#xa;</xsl:text>
</xsl:for-each>
</xsl:template>
</xsl:stylesheet>
